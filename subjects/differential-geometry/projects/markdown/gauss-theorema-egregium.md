# Gauss’ Theorema Egregium

## An End-to-End Metacognitive Mathematics Walkthrough

**Problem ID:** DG-03  
**Level:** Intermediate    
**Version:** 1  
**Status:** Completed exposition relative to the declared imports.  
**Evidence:** Authored mathematical proof and illustrative interaction/repair traces. No deployed multi-agent run, independent review, or proof-assistant certificate is claimed.

## 1. Target, definitions, and import contract

For a smooth regular surface in $\mathbb R^3$, prove Gaussian curvature $K=\det S$ is determined by the first fundamental form and is preserved by local isometries.

**Foundations and permitted imports:**

For a regular surface choose local coordinates and a unit normalν. Use the induced metric g, its Levi-Civita connection∇, and decomposition of the ambient derivative D_XY=∇_XY+h(X,Y)ν with D_Xν=−SX and h(X,Y)=g(SX,Y). These follow from orthogonal projection, metric compatibility, and torsion-freeness. Curvature convention R(X,Y)Z=∇_X∇_YZ−∇_Y∇_XZ−∇_[X,Y]Z. The Gauss equation is derived here.

The imports are supporting mathematical results, not outputs of an executed agent system. The proof below establishes the target relative to them. Its decisive bridges are made explicit in the node roles and activities.

## 2. Node interaction workflow

Each node owns a mathematical obligation and contains **Ego, Memory, Intellect, Sense, and Action**. These are faculties within a node. Accepted logical dependencies form a DAG; diagnostic feedback belongs to the separate repair trace in §6.

```text
N1 [v1] Derive the Gauss equation
N2 [v1] Identify Gaussian curvature
  N1 -- E1: Intrinsic curvature expressed through h with its exact signs. --> N2
N3 [v1] Metric dependence and isometry invariance
  N2 -- E2: K=detS is the scalar computed from the intrinsic curvature tensor. --> N3
```

### Evidence transfer ledger

Every arrow refers to a named versioned export. Its recipient uses that export under the producer's assumptions; no arrow itself proves the claim. Nodes without incoming proof edges use only their declared foundational imports. The ledger documents the authored dependency design, not a logged runtime execution.

| Transfer | Producer / export | Exact transferred claim | Receiving activity | Compatibility gate | Evidence |
|---|---|---|---|---|---|
| T1-2 | N1/v1, E1 | Intrinsic curvature expressed through h with its exact signs. | N2.1 | N2 inputs below; same theorem objects and assumptions | Proof §4.N1 |
| T2-3 | N2/v1, E2 | K=detS is the scalar computed from the intrinsic curvature tensor. | N3.1 | N3 inputs below; same theorem objects and assumptions | Proof §4.N2 |

## 3. Node roles and faculty activities

### N1/v1 — Derive the Gauss equation

**Object, role, and local target:** Extract tangential terms from ambient curvature zero. The required export is: Intrinsic curvature expressed through h with its exact signs.

**Inputs:** Flat ambient connection and tangential/normal decomposition; foundational imports stated in §1

| Faculty | Concrete responsibility |
|---|---|
| Ego | Scope this obligation to `DG-03.N1`; publish E1 only after the stated local target is established. |
| Memory | Retain Flat ambient connection and tangential/normal decomposition; foundational imports stated in §1; keep their assumptions and versions attached. |
| Intellect | Extract tangential terms from ambient curvature zero. |
| Sense | Changing the curvature convention changes formula signs. |
| Action | Execute the numbered mathematical activities in §4.N1, including its displayed identities and logical implications. |

**Export E1/v1:** Intrinsic curvature expressed through h with its exact signs. Evidence is the authored argument in §4.N1, relative to §1 imports.

**Acceptance gate:** Every activity in §4.N1 must establish this exact export under the inputs above; the Sense check must not identify an unclosed hypothesis or case.

**Repair route:** If the Sense check fails, suspend E1, correct the named hypothesis or activity, increment the version, and recheck each downstream transfer that consumes E1. A changed hypothesis must be disclosed as a changed contract.

### N2/v1 — Identify Gaussian curvature

**Object, role, and local target:** Compute sectional curvature as a two-by-two determinant. The required export is: K=detS is the scalar computed from the intrinsic curvature tensor.

**Inputs:** Orthonormal tangent basis e₁,e₂; prior exports E1/v1

| Faculty | Concrete responsibility |
|---|---|
| Ego | Scope this obligation to `DG-03.N2`; publish E2 only after the stated local target is established. |
| Memory | Retain Orthonormal tangent basis e₁,e₂; prior exports E1/v1; keep their assumptions and versions attached. |
| Intellect | Compute sectional curvature as a two-by-two determinant. |
| Sense | Reversingν negates S but preserves its two-dimensional determinant. |
| Action | Execute the numbered mathematical activities in §4.N2, including its displayed identities and logical implications. |

**Export E2/v1:** K=detS is the scalar computed from the intrinsic curvature tensor. Evidence is the authored argument in §4.N2, relative to §1 imports.

**Acceptance gate:** Every activity in §4.N2 must establish this exact export under the inputs above; the Sense check must not identify an unclosed hypothesis or case.

**Repair route:** If the Sense check fails, suspend E2, correct the named hypothesis or activity, increment the version, and recheck each downstream transfer that consumes E2. A changed hypothesis must be disclosed as a changed contract.

### N3/v1 — Metric dependence and isometry invariance

**Object, role, and local target:** Express the connection and curvature entirely through g. The required export is: Gaussian curvature is determined by the first fundamental form and preserved by local isometries.

**Inputs:** Coordinate curvature formula and metric compatibility; prior exports E2/v1

| Faculty | Concrete responsibility |
|---|---|
| Ego | Scope this obligation to `DG-03.N3`; publish E3 only after the stated local target is established. |
| Memory | Retain Coordinate curvature formula and metric compatibility; prior exports E2/v1; keep their assumptions and versions attached. |
| Intellect | Express the connection and curvature entirely through g. |
| Sense | Equal extrinsic pictures are unnecessary; the connection is metric-determined. |
| Action | Execute the numbered mathematical activities in §4.N3, including its displayed identities and logical implications. |

**Export E3/v1:** Gaussian curvature is determined by the first fundamental form and preserved by local isometries. Evidence is the authored argument in §4.N3, relative to §1 imports.

**Acceptance gate:** Every activity in §4.N3 must establish this exact export under the inputs above; the Sense check must not identify an unclosed hypothesis or case.

**Repair route:** If the Sense check fails, suspend E3, correct the named hypothesis or activity, increment the version, and recheck each downstream transfer that consumes E3. A changed hypothesis must be disclosed as a changed contract.

## 4. Continuous mathematical proof

Read these steps in order as one proof; the diagram is optional. Numbered activities identify the specific constructions and deductions owned by each node.

### §4.N1 — Derive the Gauss equation

1. In R³, D_XD_YZ−D_YD_XZ−D_[X,Y]Z=0.

2. The tangential part of D_XD_YZ is∇_X∇_YZ−h(Y,Z)SX; interchange X,Y and subtract.

3. Therefore R(X,Y)Z=h(Y,Z)SX−h(X,Z)SY.

4. Pairing with W gives g(R(X,Y)Z,W)=h(Y,Z)h(X,W)−h(X,Z)h(Y,W).

5. This is the Gauss equation with the fixed curvature convention.

### §4.N2 — Identify Gaussian curvature

1. Use X=e₁,Y=e₂,Z=e₂,W=e₁.

2. The equation gives g(R(e₁,e₂)e₂,e₁)=h₁₁h₂₂−h₁₂²=detS, since h is symmetric and the basis orthonormal.

3. For coordinate vectors, K=g(R(∂₁,∂₂)∂₂,∂₁)/(g₁₁g₂₂−g₁₂²).

4. The denominator is positive by regularity.

5. Hence Gaussian curvature equals the intrinsic sectional curvature.

### §4.N3 — Metric dependence and isometry invariance

1. The Christoffel symbols are Γ^k_ij=(1/2)g^{kℓ}(∂_i g_jℓ+∂_j g_iℓ−∂_ℓ g_ij).

2. In a coordinate frame R(∂_i,∂_j)∂_k has component ∂_iΓ^ℓ_jk−∂_jΓ^ℓ_ik+Γ^m_jkΓ^ℓ_im−Γ^m_ikΓ^ℓ_jm.

3. Thus the displayed K uses only g and its first and second derivatives.

4. A local isometry preserves g and, by uniqueness of the Levi-Civita connection, transports∇ andR; the scalar K is consequently preserved.

5. This proves the theorem.

## 5. Worked instance and boundary audit

A cylinder of radiusr is parametrized by(r cosu,r sinu,v) and has metric r²du²+dv². Set x=ru,y=v; the metric becomes dx²+dy², so all Γ andR vanish and K=0. Its principal curvatures have one zero value, giving the same detS despite its visible bending.

**Boundary or failed-argument audit:**

A sphere has positiveK whereas the plane hasK=0, so no local isometry can flatten a sphere into the plane. Sense rejects equating arbitrary bending with an isometry; the metric, not only the embedding, must be preserved.

## 6. Illustrative interaction and repair trace

This is an authored teaching trace, not a recorded agent run.

1. **Ego → Memory:** register the §1 theorem, imports, and requested exports before beginning the proof.
2. **Intellect → Action:** choose the bridges in §3 and carry out the numbered activities in §4; transmit only established E-exports along the §2 DAG.
3. **Sense → responsible node:** test the specific boundary/failure in §5 and the node's individual audit. A failing candidate is withheld; downstream nodes may not use it.
4. **Memory + Intellect:** identify whether the error is an omitted condition, an invalid inference, or an attempted extension beyond the theorem. Restore the exact contract or explicitly state a different one.
5. **Action:** redo the affected mathematical activity using the repaired condition or inference. Recheck consuming nodes, rather than feeding their conclusions back as premises.
6. **Ego:** publish only the supported export with its assumptions and proof location. A hypothetical revised export is v2; the written proof here is the v1 exposition, not a claim that this repair was executed.

## 7. Reusable result and evidence limits

**Final reusable export:** the theorem in §1, proved by §4 under the stated imports. Keep the assumptions, import provenance, problem ID `DG-03`, version 1, and the proof with every reuse. Intermediate exports E1–E3 retain their local contracts.

The worked instance supports comprehension; it does not establish the universal claim. This walkthrough supplies an exposition and a proposed agent decomposition. It makes no empirical claim of better proof success under a fixed resource budget. Structural consistency is separate from mathematical verification.

## 8. Sources and navigation

[Local problem bank](problems.md) records the original selection and planned proof mechanism. The argument and node decomposition here are newly authored; supporting mathematical sources are listed below.

- [Harvard Math 230a: Riemannian geometry, curvature, and Hopf–Rinow](https://people.math.harvard.edu/~landesman/assets/math-230a-harvard-differential-geometry-notes.pdf).

[Branch index](../README.md)

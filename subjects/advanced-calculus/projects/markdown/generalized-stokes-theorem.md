# Generalized Stokes’ Theorem

## An End-to-End Metacognitive Mathematics Walkthrough

**Problem ID:** AC-05  
**Level:** Advanced    
**Version:** 1  
**Status:** Completed exposition relative to the declared imports.  
**Evidence:** Authored mathematical proof and illustrative interaction/repair traces. No deployed multi-agent run, independent review, or proof-assistant certificate is claimed.

## 1. Target, definitions, and import contract

For a compact oriented smooth $n$-manifold $M$ with boundary and a smooth $(n-1)$-form $\omega$, prove $\int_M d\omega=\int_{\partial M}\omega$, with the outward-normal-first boundary orientation.

**Foundations and permitted imports:**

Import oriented smooth charts (including half-space charts), smooth partitions of unity subordinate to a finite chart refinement of compact M, coordinate invariance of integration of forms, and AC-02. A partition can be chosen with each localized support compactly contained in its chart relative to the half-space. For n=1 the boundary integral of a0-form is the signed endpoint sum; n≥1 is intended. Boundary orientation is outward-normal-first.

The imports are supporting mathematical results, not outputs of an executed agent system. The proof below establishes the target relative to them. Its decisive bridges are made explicit in the node roles and activities.

## 2. Node interaction workflow

Each node owns a mathematical obligation and contains **Ego, Memory, Intellect, Sense, and Action**. These are faculties within a node. Accepted logical dependencies form a DAG; diagnostic feedback belongs to the separate repair trace in §6.

```text
N1 [v1] Interior coordinate identity
N2 [v1] Boundary coordinate identity
N3 [v1] Partition and global synthesis
  N1 -- E1: Stokes’ identity for compactly supported interior-chart forms. --> N3
  N2 -- E2: Stokes’ identity in an oriented boundary chart with the required sign. --> N3
```

### Evidence transfer ledger

Every arrow refers to a named versioned export. Its recipient uses that export under the producer's assumptions; no arrow itself proves the claim. Nodes without incoming proof edges use only their declared foundational imports. The ledger documents the authored dependency design, not a logged runtime execution.

| Transfer | Producer / export | Exact transferred claim | Receiving activity | Compatibility gate | Evidence |
|---|---|---|---|---|---|
| T1-3 | N1/v1, E1 | Stokes’ identity for compactly supported interior-chart forms. | N3.1 | N3 inputs below; same theorem objects and assumptions | Proof §4.N1 |
| T2-3 | N2/v1, E2 | Stokes’ identity in an oriented boundary chart with the required sign. | N3.1 | N3 inputs below; same theorem objects and assumptions | Proof §4.N2 |

## 3. Node roles and faculty activities

### N1/v1 — Interior coordinate identity

**Object, role, and local target:** Integrate each partial derivative over its coordinate. The required export is: Stokes’ identity for compactly supported interior-chart forms.

**Inputs:** Compactly supported(n−1)-form in oriented Rⁿ; foundational imports stated in §1

| Faculty | Concrete responsibility |
|---|---|
| Ego | Scope this obligation to `AC-05.N1`; publish E1 only after the stated local target is established. |
| Memory | Retain Compactly supported(n−1)-form in oriented Rⁿ; foundational imports stated in §1; keep their assumptions and versions attached. |
| Intellect | Integrate each partial derivative over its coordinate. |
| Sense | Compact support removes artificial chart-edge boundary terms. |
| Action | Execute the numbered mathematical activities in §4.N1, including its displayed identities and logical implications. |

**Export E1/v1:** Stokes’ identity for compactly supported interior-chart forms. Evidence is the authored argument in §4.N1, relative to §1 imports.

**Acceptance gate:** Every activity in §4.N1 must establish this exact export under the inputs above; the Sense check must not identify an unclosed hypothesis or case.

**Repair route:** If the Sense check fails, suspend E1, correct the named hypothesis or activity, increment the version, and recheck each downstream transfer that consumes E1. A changed hypothesis must be disclosed as a changed contract.

### N2/v1 — Boundary coordinate identity

**Object, role, and local target:** Track the outward-first orientation explicitly. The required export is: Stokes’ identity in an oriented boundary chart with the required sign.

**Inputs:** The same form on half-space x_n≥0; foundational imports stated in §1

| Faculty | Concrete responsibility |
|---|---|
| Ego | Scope this obligation to `AC-05.N2`; publish E2 only after the stated local target is established. |
| Memory | Retain The same form on half-space x_n≥0; foundational imports stated in §1; keep their assumptions and versions attached. |
| Intellect | Track the outward-first orientation explicitly. |
| Sense | A chart boundary is not automatically positively oriented in tangent coordinates. |
| Action | Execute the numbered mathematical activities in §4.N2, including its displayed identities and logical implications. |

**Export E2/v1:** Stokes’ identity in an oriented boundary chart with the required sign. Evidence is the authored argument in §4.N2, relative to §1 imports.

**Acceptance gate:** Every activity in §4.N2 must establish this exact export under the inputs above; the Sense check must not identify an unclosed hypothesis or case.

**Repair route:** If the Sense check fails, suspend E2, correct the named hypothesis or activity, increment the version, and recheck each downstream transfer that consumes E2. A changed hypothesis must be disclosed as a changed contract.

### N3/v1 — Partition and global synthesis

**Object, role, and local target:** Localize the form, then sum without adding spurious derivatives. The required export is: ∫_M dω=∫_∂Mω for the stated compact oriented manifold.

**Inputs:** Finite partitionρ_j with∑ρ_j=1; both coordinate identities; prior exports E1/v1, E2/v1

| Faculty | Concrete responsibility |
|---|---|
| Ego | Scope this obligation to `AC-05.N3`; publish E3 only after the stated local target is established. |
| Memory | Retain Finite partitionρ_j with∑ρ_j=1; both coordinate identities; prior exports E1/v1, E2/v1; keep their assumptions and versions attached. |
| Intellect | Localize the form, then sum without adding spurious derivatives. |
| Sense | The localized derivative is d(ρ_jω), not merelyρ_jdω. |
| Action | Execute the numbered mathematical activities in §4.N3, including its displayed identities and logical implications. |

**Export E3/v1:** ∫_M dω=∫_∂Mω for the stated compact oriented manifold. Evidence is the authored argument in §4.N3, relative to §1 imports.

**Acceptance gate:** Every activity in §4.N3 must establish this exact export under the inputs above; the Sense check must not identify an unclosed hypothesis or case.

**Repair route:** If the Sense check fails, suspend E3, correct the named hypothesis or activity, increment the version, and recheck each downstream transfer that consumes E3. A changed hypothesis must be disclosed as a changed contract.

## 4. Continuous mathematical proof

Read these steps in order as one proof; the diagram is optional. Numbered activities identify the specific constructions and deductions owned by each node.

### §4.N1 — Interior coordinate identity

1. Write η=∑_{i=1}^n(−1)^{i−1}a_i dx₁∧⋯∧omit(dx_i)∧⋯∧dx_n.

2. Then dη=(∑_i ∂_i a_i)dx₁∧⋯∧dx_n.

3. Fubini and FTC imply each full-space integral of∂_i a_i is 0, since a_i has compact support.

4. Thus∫dη=0, matching the empty boundary contribution of an interior chart.

### §4.N2 — Boundary coordinate identity

1. Tangential derivative integrals vanish as before.

2. The normal term gives∫₀^∞∂_n a_n dx_n=−a_n(x′,0), so∫dη=−∫a_n(x′,0)dx′.

3. The outward normal is−∂_n.

4. Relative to the standard tangent frame(∂₁,…,∂_(n−1)), the outward-first frame has orientation sign(−1)^n.

5. The restriction ofη is(−1)^(n−1)a_n dx₁∧⋯∧dx_(n−1).

6. Multiplying these signs gives−a_n, exactly the computed boundary integral.

7. For n=1 this says the boundary at 0 contributes−a₁(0).

### §4.N3 — Partition and global synthesis

1. Write ω=∑_jρ_jω.

2. Each localized form has support within its chart, so the appropriate identity applies after pullback and extension by zero away from the chart edges.

3. Linearity gives∫_M dω=∑_j∫_M d(ρ_jω)=∑_j∫_∂M ρ_jω=∫_∂Mω.

4. Equivalently the extra dρ_j∧ω terms sum to d(∑ρ_j)∧ω=0.

5. Compactness makes the sum finite.

6. This proves the global formula with no unexamined chart-interface terms.

## 5. Worked instance and boundary audit

On the unit disk in R² with orientation dx∧dy, take ω=(−y dx+x dy)/2. Then dω=dx∧dy, whose integral is π. On the counterclockwise circle x=cost,y=sint, ω=dt/2 and the boundary integral is π, exercising the orientation convention.

**Boundary or failed-argument audit:**

For the interval[0,1], Stokes gives∫f′dx=f(1)−f(0); treating both endpoint orientations as positive would give the wrong result. Sense returns this one-dimensional sign test before accepting the boundary-chart export.

## 6. Illustrative interaction and repair trace

This is an authored teaching trace, not a recorded agent run.

1. **Ego → Memory:** register the §1 theorem, imports, and requested exports before beginning the proof.
2. **Intellect → Action:** choose the bridges in §3 and carry out the numbered activities in §4; transmit only established E-exports along the §2 DAG.
3. **Sense → responsible node:** test the specific boundary/failure in §5 and the node's individual audit. A failing candidate is withheld; downstream nodes may not use it.
4. **Memory + Intellect:** identify whether the error is an omitted condition, an invalid inference, or an attempted extension beyond the theorem. Restore the exact contract or explicitly state a different one.
5. **Action:** redo the affected mathematical activity using the repaired condition or inference. Recheck consuming nodes, rather than feeding their conclusions back as premises.
6. **Ego:** publish only the supported export with its assumptions and proof location. A hypothetical revised export is v2; the written proof here is the v1 exposition, not a claim that this repair was executed.

## 7. Reusable result and evidence limits

**Final reusable export:** the theorem in §1, proved by §4 under the stated imports. Keep the assumptions, import provenance, problem ID `AC-05`, version 1, and the proof with every reuse. Intermediate exports E1–E3 retain their local contracts.

The worked instance supports comprehension; it does not establish the universal claim. This walkthrough supplies an exposition and a proposed agent decomposition. It makes no empirical claim of better proof success under a fixed resource budget. Structural consistency is separate from mathematical verification.

## 8. Sources and navigation

[Local problem bank](problems.md) records the original selection and planned proof mechanism. The argument and node decomposition here are newly authored; supporting mathematical sources are listed below.

- [Harvard Math 230a: Riemannian geometry, curvature, and Hopf–Rinow](https://people.math.harvard.edu/~landesman/assets/math-230a-harvard-differential-geometry-notes.pdf).

[Branch index](../README.md)

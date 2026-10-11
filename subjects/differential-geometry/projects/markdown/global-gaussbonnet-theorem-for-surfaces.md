# Global Gauss–Bonnet Theorem for Surfaces

## An End-to-End Metacognitive Mathematics Walkthrough

**Problem ID:** DG-04  
**Level:** Advanced    
**Version:** 1  
**Status:** Completed exposition relative to the declared imports.  
**Evidence:** Authored mathematical proof and illustrative interaction/repair traces. No deployed multi-agent run, independent review, or proof-assistant certificate is claimed.

## 1. Target, definitions, and import contract

For a closed oriented smooth Riemannian surface $M$, prove $\int_M K\,dA=2\pi\chi(M)$. Here closed means compact without boundary.

**Foundations and permitted imports:**

Import local Gauss–Bonnet for an oriented disk-like region with piecewise smooth positively oriented boundary: ∫K dA+∫boundary k_g ds+∑ exterior turning angles=2π. Also import a finite smooth triangulation of the closed oriented surface with regular edges and tangent sectors filling2π around every vertex. Curvature is intrinsic by DG-03. These local geometric and triangulation modules are substantial imports; the global formula is proved by assembly.

The imports are supporting mathematical results, not outputs of an executed agent system. The proof below establishes the target relative to them. Its decisive bridges are made explicit in the node roles and activities.

## 2. Node interaction workflow

Each node owns a mathematical obligation and contains **Ego, Memory, Intellect, Sense, and Action**. These are faculties within a node. Accepted logical dependencies form a DAG; diagnostic feedback belongs to the separate repair trace in §6.

```text
N1 [v1] Local face identity
N2 [v1] Cancel shared edges and collect vertices
  N1 -- E1: A local curvature identity for each face. --> N2
N3 [v1] Convert to Euler characteristic
  N2 -- E2: The global integral equals2πV−πF. --> N3
```

### Evidence transfer ledger

Every arrow refers to a named versioned export. Its recipient uses that export under the producer's assumptions; no arrow itself proves the claim. Nodes without incoming proof edges use only their declared foundational imports. The ledger documents the authored dependency design, not a logged runtime execution.

| Transfer | Producer / export | Exact transferred claim | Receiving activity | Compatibility gate | Evidence |
|---|---|---|---|---|---|
| T1-2 | N1/v1, E1 | A local curvature identity for each face. | N2.1 | N2 inputs below; same theorem objects and assumptions | Proof §4.N1 |
| T2-3 | N2/v1, E2 | The global integral equals2πV−πF. | N3.1 | N3 inputs below; same theorem objects and assumptions | Proof §4.N2 |

## 3. Node roles and faculty activities

### N1/v1 — Local face identity

**Object, role, and local target:** Express turning angles through interior face angles. The required export is: A local curvature identity for each face.

**Inputs:** A compatible finite triangulation; foundational imports stated in §1

| Faculty | Concrete responsibility |
|---|---|
| Ego | Scope this obligation to `DG-04.N1`; publish E1 only after the stated local target is established. |
| Memory | Retain A compatible finite triangulation; foundational imports stated in §1; keep their assumptions and versions attached. |
| Intellect | Express turning angles through interior face angles. |
| Sense | Do not silently assume every triangulation edge is geodesic. |
| Action | Execute the numbered mathematical activities in §4.N1, including its displayed identities and logical implications. |

**Export E1/v1:** A local curvature identity for each face. Evidence is the authored argument in §4.N1, relative to §1 imports.

**Acceptance gate:** Every activity in §4.N1 must establish this exact export under the inputs above; the Sense check must not identify an unclosed hypothesis or case.

**Repair route:** If the Sense check fails, suspend E1, correct the named hypothesis or activity, increment the version, and recheck each downstream transfer that consumes E1. A changed hypothesis must be disclosed as a changed contract.

### N2/v1 — Cancel shared edges and collect vertices

**Object, role, and local target:** Pair each edge with its opposite boundary orientation. The required export is: The global integral equals2πV−πF.

**Inputs:** All local face identities; closed oriented surface; prior exports E1/v1

| Faculty | Concrete responsibility |
|---|---|
| Ego | Scope this obligation to `DG-04.N2`; publish E2 only after the stated local target is established. |
| Memory | Retain All local face identities; closed oriented surface; prior exports E1/v1; keep their assumptions and versions attached. |
| Intellect | Pair each edge with its opposite boundary orientation. |
| Sense | No boundary edge may remain unpaired; this uses that M is closed. |
| Action | Execute the numbered mathematical activities in §4.N2, including its displayed identities and logical implications. |

**Export E2/v1:** The global integral equals2πV−πF. Evidence is the authored argument in §4.N2, relative to §1 imports.

**Acceptance gate:** Every activity in §4.N2 must establish this exact export under the inputs above; the Sense check must not identify an unclosed hypothesis or case.

**Repair route:** If the Sense check fails, suspend E2, correct the named hypothesis or activity, increment the version, and recheck each downstream transfer that consumes E2. A changed hypothesis must be disclosed as a changed contract.

### N3/v1 — Convert to Euler characteristic

**Object, role, and local target:** Count incidences before substituting χ. The required export is: Global Gauss–Bonnet under the stated hypotheses.

**Inputs:** Triangulation counts; prior exports E2/v1

| Faculty | Concrete responsibility |
|---|---|
| Ego | Scope this obligation to `DG-04.N3`; publish E3 only after the stated local target is established. |
| Memory | Retain Triangulation counts; prior exports E2/v1; keep their assumptions and versions attached. |
| Intellect | Count incidences before substituting χ. |
| Sense | A surface with boundary needs additional boundary curvature and corner terms. |
| Action | Execute the numbered mathematical activities in §4.N3, including its displayed identities and logical implications. |

**Export E3/v1:** Global Gauss–Bonnet under the stated hypotheses. Evidence is the authored argument in §4.N3, relative to §1 imports.

**Acceptance gate:** Every activity in §4.N3 must establish this exact export under the inputs above; the Sense check must not identify an unclosed hypothesis or case.

**Repair route:** If the Sense check fails, suspend E3, correct the named hypothesis or activity, increment the version, and recheck each downstream transfer that consumes E3. A changed hypothesis must be disclosed as a changed contract.

## 4. Continuous mathematical proof

Read these steps in order as one proof; the diagram is optional. Numbered activities identify the specific constructions and deductions owned by each node.

### §4.N1 — Local face identity

1. For each triangular faceF with interior corner anglesθ_Fv, the local theorem reads ∫_F KdA+∫_∂F k_gds+∑_{v∈F}(π−θ_Fv)=2π.

2. The boundary need not be geodesic: retain its geodesic-curvature term.

3. Each face is disk-like and all boundary orientations are the induced positive ones.

### §4.N2 — Cancel shared edges and collect vertices

1. Sum over the F faces.

2. Every edge belongs to two faces with opposite induced boundary directions; its signed geodesic-curvature integrals cancel.

3. At each vertex the incident interior sectors sum to 2π.

4. There are3F corner incidences, so the sum of all exterior angles is 3πF−2πV.

5. Thus∫_M KdA+3πF−2πV=2πF, yielding∫_M KdA=2πV−πF.

### §4.N3 — Convert to Euler characteristic

1. Because each triangle has 3 edges and each edge is shared by 2 triangles,3F=2E.

2. Then2π(V−E+F)=2πV−πF, the preceding integral.

3. Usingχ(M)=V−E+F gives∫K dA=2πχ(M).

4. The formula is independent of the selected compatible triangulation; χ is its topological invariant.

## 5. Worked instance and boundary audit

For the unit sphere, K=1 and area4π, so its integral is 4π=2π·2. A tetrahedral combinatorial triangulation hasV=4,E=6,F=4 and χ=2. A flat metric on the torus hasK=0 and χ=0, giving a second consistency check.

**Boundary or failed-argument audit:**

A flat unit disk has zero curvature integral butχ=1; its boundary contributes∫k_gds=2π. Sense rejects applying the closed-surface formula to the disk and restores the boundary terms of the local theorem.

## 6. Illustrative interaction and repair trace

This is an authored teaching trace, not a recorded agent run.

1. **Ego → Memory:** register the §1 theorem, imports, and requested exports before beginning the proof.
2. **Intellect → Action:** choose the bridges in §3 and carry out the numbered activities in §4; transmit only established E-exports along the §2 DAG.
3. **Sense → responsible node:** test the specific boundary/failure in §5 and the node's individual audit. A failing candidate is withheld; downstream nodes may not use it.
4. **Memory + Intellect:** identify whether the error is an omitted condition, an invalid inference, or an attempted extension beyond the theorem. Restore the exact contract or explicitly state a different one.
5. **Action:** redo the affected mathematical activity using the repaired condition or inference. Recheck consuming nodes, rather than feeding their conclusions back as premises.
6. **Ego:** publish only the supported export with its assumptions and proof location. A hypothetical revised export is v2; the written proof here is the v1 exposition, not a claim that this repair was executed.

## 7. Reusable result and evidence limits

**Final reusable export:** the theorem in §1, proved by §4 under the stated imports. Keep the assumptions, import provenance, problem ID `DG-04`, version 1, and the proof with every reuse. Intermediate exports E1–E3 retain their local contracts.

The worked instance supports comprehension; it does not establish the universal claim. This walkthrough supplies an exposition and a proposed agent decomposition. It makes no empirical claim of better proof success under a fixed resource budget. Structural consistency is separate from mathematical verification.

## 8. Sources and navigation

[Local problem bank](problems.md) records the original selection and planned proof mechanism. The argument and node decomposition here are newly authored; supporting mathematical sources are listed below.

- [MIT Geometry and Topology: curved geometries and Gauss–Bonnet](https://ocw.mit.edu/courses/18-900-geometry-and-topology-in-the-plane-spring-2023/pages/chapter-ix-curved-geometries/).

[Branch index](../README.md)
